import {ICheckedQuestions, IQuestion} from "../../types/questions";

export const getCorrectAnswer = ( quest : IQuestion) => Number(quest['correct_answer'].split(": ")[1]);

export const checkNextAnswerStep = (checkedQuestions : ICheckedQuestions, currentIndex : number, questionsCount : number) => {
    const arr = Array(questionsCount).fill(null).map( (el,index) => index + 1)
    const badNumbers = Object.keys(checkedQuestions).map( el => Number(el.split(" ")[1]))
    const closestRight = arr.find( numb => ( numb > currentIndex + 1 ) && ( badNumbers.indexOf(numb) === -1 ) )
    let furthestLeft;
    for ( let numb of arr){
        if ( ( numb < currentIndex + 1)&& ( badNumbers.indexOf(numb) === -1 ) ){
            furthestLeft = numb
            break
        }
    }
    // без учета ( -1 ) от числа для индекса страницы
    return closestRight ? closestRight : ( furthestLeft ? furthestLeft : null )
}