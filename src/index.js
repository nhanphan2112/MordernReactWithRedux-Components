import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
      <ApprovalCard/>
			<CommentDetail
				author="Sam"
				timeAgo="Today at 4:45 PM"
				avatar={faker.image.avatar()}
				content="Nice blog post!"
			/>
			<CommentDetail
				author="Alex"
				timeAgo="Today at 2:00 PM"
				avatar={faker.image.avatar()}
				content="What the hell"
			/>
			<CommentDetail
				author="Jane"
				timeAgo="Yesterday at 5:00 PM"
				avatar={faker.image.avatar()}
				content="Do Anh Doan Duoc"
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
