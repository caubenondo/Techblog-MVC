module.exports = {
    
    same: (current,compare)=>{
        return current == compare
    }
    ,
    format_date:(date)=>{
        return date.toLocaleDateString()
    },
    format_time:(date)=>{
        return date.toLocaleDateString() +' at ' + date.toLocaleTimeString()
    }
}