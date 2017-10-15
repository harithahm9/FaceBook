$(document).ready(function(){
  createYear();
    createMonth();
    createDate();
});

function createYear(){
    maxyear=2017;
    minyear=1960;
    var option='';
    for(var i=maxyear;i>=minyear;i--){
    option= option+'<option>'+i+'</option>';
//        console.log('option',option)
    }
    $('#year').append(option);
}
function createMonth(){
    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    var option='';
    for(var i=0;i<12;i++){
        option=option+'<option>'+months[i]+'</option>';
    }
    $('#month').append(option);
    
}
function createDate(){
    maxdate=31;
    mindate=1;
    var option='';
    for(var i=maxdate;i>=mindate;i--){
        option=option+'<option>'+i+'</option>';
    }
    $('#date').append(option);
}