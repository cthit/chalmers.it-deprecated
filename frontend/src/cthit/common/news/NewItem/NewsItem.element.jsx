import React from "react";
import {
    ItemWrapper,
    TitleText,
    SubtitleText,
    NewsImage
} from "./NewsItem.style";

export const NewsItem = () => {
    return (
        <ItemWrapper>
            <div>
                <TitleText>Hello</TitleText>
                <SubtitleText>
                    Skriven för <a href="#">didIT</a> av <a href="#">Mölle</a>
                </SubtitleText>
                <p
                    style={{
                        marginLeft: "1rem",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        maxHeight: "2.5rem",
                        width: "30rem"
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <NewsImage src="https://digit.chalmers.it/digit20.svg" />
        </ItemWrapper>
    );
};
