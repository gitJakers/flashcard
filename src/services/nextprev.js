import {getFlashCards, getData} from './firebase';

function prevFlashCard(index, data){
    // this.state.index > this.state.flashCards.length-1 ? this.setState({ index: 0 }) : this.setState({ index : this.state.index++});
    if(index < 0){
        index = data.length-1;
    }else{
        index--;
    }
    // return data[index];
    console.log(index);
};

function nextFlashCard(index, data){
    if(index > data.length-1){
        index = 0;
    }else{
        index++;
    }
    console.log(index);
};

export {prevFlashCard, nextFlashCard};