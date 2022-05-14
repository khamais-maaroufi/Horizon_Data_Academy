import { Card, Badge } from "antd";
import Link from "next/link";
import {  List } from "antd";
const { Meta } = Card;

const LessonCard = (lesson) => {
  console.log("hello i'm the child component: ", lesson);
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={course && course.lessons}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{index + 1}</Avatar>}
              title={item.title}
            ></List.Item.Meta>
          </List.Item>
        )}
      ></List>
    </>
  );
};

export default LessonCard;
