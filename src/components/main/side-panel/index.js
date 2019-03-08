import React from "react";
import { Container } from "./styled";

import Headers from "./headers";
import Content from "./content";
import HotPost from "./content/hotposts";
import { Star, Smile } from "react-feather";
const SidePanel = () => {
  const starComponent = <Star size={18} />;
  const smileComponent = <Smile size={18} />;
  const stackOverflow = <i class="fab fa-stack-overflow" />;
  return (
    <>
      <Container>
        <Headers iconComponent={starComponent} header={"Featured on Meta"} />
        <Content
          iconComponent={stackOverflow}
          content={
            "Data science time! February 2019 and opinion with experience"
          }
        />

        <Headers iconComponent={smileComponent} header={"Hot Meta Posts"} />
        <HotPost
          postView={115.3}
          content={
            "Can a moderator share whatever it was that I said in this post's comments..."
          }
        />
        <HotPost
          postView={82}
          content={
            "Deeper discussion for Angular, TypeScript, AngularJS, Javascript (and maybe...)"
          }
        />
        <HotPost
          postView={82}
          content={
            "Deeper discussion for Angular, TypeScript, AngularJS, Javascript (and maybe...)"
          }
        />
        <HotPost
          postView={32.4}
          content={
            "Can we please get the 'How to create an MVCE' help page jkbkjbbjbkjvhfgdxgcv khvjgc"
          }
        />
        <HotPost
          postView={32.4}
          content={"Can we please get the 'How to create an MVCE' help page"}
        />
        <Headers
          iconComponent={smileComponent}
          header={"Hot Network Questions"}
        />
        <Headers iconComponent={smileComponent} header={"Jobs Near You"} />
      </Container>
    </>
  );
};

export default SidePanel;
