package main

import (
	"fmt"

	"chalmers.it/chalmersit/internal/app"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Hello world")
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		AllowCredentials: true}))

	router.GET("/news", app.GetNews)

	router.Run(":5000")
}
