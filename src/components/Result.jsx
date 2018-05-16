import React from "react";

const Result = props => {
  // const questList = props.questions.map(quest => {
  //   return (
  //     <li className="question" key={quest}>
  //       {quest}
  //     </li>
  //   );
	// });
	const questList = ['hi','you','me'];
  return (
    <div>
			{/* <h1>{props.companyName}</h1> */}
			<h1> Google </h1>
      <ul className="questList">{questList}</ul>
    </div>
  );
};

export default Result;