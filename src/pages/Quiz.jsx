// react router dom import
import { useParams } from "react-router-dom";

// components
import Test from "../components/Test";

// hooks
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/newresources`
  );

  function createTitle() {
    if(title == "HTML") {
      return 0
    } else if(title == "CSS") {
      return 1
    } else if(title == "JavaScript") {
      return 2
    } else {
      return 3
    }
  }

  // console.log(quizzes[0].resources[0])
  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <div className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>Something went wrong</h3>}
      {quizzes && <Test questions={quizzes[0].resources[createTitle()]} />}
    </div>
  );
}

export default Quiz;