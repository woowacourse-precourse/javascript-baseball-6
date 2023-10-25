const errorDetection = (player_num) => {
    if(player_num.length == 3){
        if(player_num[0] == player_num[1] || player_num[0] == player_num[2] || player_num[1] == player_num[2]){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return true;
    }
};

export default errorDetection;
