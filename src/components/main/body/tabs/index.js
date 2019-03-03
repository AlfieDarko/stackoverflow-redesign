import React from "react";
import { ChevronDown } from "react-feather";
import { TabsContainer, TabsItem } from "./styled";
import Post from "../post/index";
const Tabs = () => {
  return (
    <>
      <TabsContainer>
        <TabsItem>
          <span>Interested</span>
          <span>Featured</span>
          <span>Hot</span>
          <span>Week</span>
          <span>Month</span>
          <span>
            Sort By <b>Views</b> <ChevronDown size={19} />
          </span>
        </TabsItem>
      </TabsContainer>
      <Post
        tags={["python", "numpty"]}
        day={"Feb 11"}
        time={"23:30"}
        interest={50}
        question={
          "What is an efficient way of joinging to tables of data stored in numpty arrays?"
        }
        username={"jsanalytics"}
        answers={2}
        score={11.2}
        views={325}
        votes={4}
      />

      <Post
        tags={["html", "html5", "youtube"]}
        day={"Feb 9"}
        time={"11:15"}
        interest={100}
        question={"FFMpeg Android compilation: command not found"}
        username={"tcodina"}
        score={150.7}
        answers={2}
        views={100}
        votes={3}
      />

      <Post
        tags={["html", "html5", "youtube"]}
        day={"Feb 11"}
        time={"11:59"}
        interest={50}
        question={
          "Trying to secure websites but also keep Home (index) page public MCV5 asp.net identity"
        }
        answers={0}
        username={"coder"}
        views={325}
        score={5.7}
        votes={7}
      />

      <Post
        tags={["html", "html5", "youtube"]}
        day={"Feb 8"}
        time={"22:30"}
        interest={50}
        question={
          "Returning an array of strings from httpClient using Observables"
        }
        answers={1}
        username={"jsanalytics"}
        views={325}
        score={11.2}
        votes={4}
      />
    </>
  );
};

export default Tabs;
