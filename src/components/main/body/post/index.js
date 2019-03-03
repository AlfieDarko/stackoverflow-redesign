import React from "react";
import {
  PostContent,
  FooterItems,
  PostContentItem,
  FooterSub,
  PostContentFooter,
  FooterTags,
  FooterAnswersBlanc,
  FooterAnswers,
  PostLineBreak
} from "./styled";
const Post = props => {
  let footerTags = props.tags.map(tag => (
    <FooterTags key={tag}>{tag}</FooterTags>
  ));
  return (
    <PostContent>
      <PostContentItem>
        <div>
          <FooterItems>+{props.interest}</FooterItems>
          {props.question}
        </div>
      </PostContentItem>
      <FooterSub>
        answered {props.day} at {props.time} {props.username} {props.score}k
      </FooterSub>
      <PostContentFooter>
        <div>{footerTags}</div>
        <div>
          <FooterAnswersBlanc>{props.votes} Votes</FooterAnswersBlanc>
          <FooterAnswers>{props.answers} Answers</FooterAnswers>
          <FooterAnswersBlanc>{props.views} Views</FooterAnswersBlanc>
        </div>
      </PostContentFooter>
      <PostLineBreak />
    </PostContent>
  );
};

export default Post;
