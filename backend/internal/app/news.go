package app

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"regexp"

	"github.com/gin-gonic/gin"
)

type NewsPost struct {
	Title string `json:"title"`
	Img   string `json:"img"`
	Text  string `json:"text"`
}

type CthitPost struct {
	Id       int    `json:"id"`
	User_id  string `json:"user_id"`
	Group_id string `json:"group_id"`
	Title    string `json:"title"`
	Body     string `json:"body"`
	Sticky   bool   `json:"sticky"`
	Url      string `json:"url"`
}

func GetNews(c *gin.Context) {
	resp, err := http.Get("https://chalmers.it/posts.json")
	if err != nil {
		c.AbortWithError(500, err)
		return
	}
	body, _ := ioutil.ReadAll(resp.Body)
	var posts []CthitPost
	json.Unmarshal(body, &posts)

	var newsPosts = make([]NewsPost, len(posts))
	for i := 0; i < len(posts); i++ {
		newsPosts[i] = convertPost(posts[i])
	}

	c.JSON(http.StatusOK, newsPosts)
}

func convertPost(post CthitPost) NewsPost {
	var newPost NewsPost
	newPost.Img, newPost.Text = getImage(post.Body)
	newPost.Title = post.Title
	return newPost
}

func getImage(body string) (string, string) {
	imageExpr := regexp.MustCompile("!\\[.*\\]\\(.*\\)")
	urlExpr := regexp.MustCompile("\\(|\\)")

	imageTag := imageExpr.FindString(body)
	if imageTag == "" {
		return "", body
	}

	return "https://chalmers.it" + urlExpr.Split(imageTag, 3)[1], imageExpr.ReplaceAllString(body, "")
}
