
export const unixToDate = (unix_timestamp) => {
    
    unix_timestamp = (unix_timestamp-(unix_timestamp%1000))/1000;
    const endTime = (unix_timestamp + (24*60*60));

    var nowTime = Date.now()
    nowTime = (nowTime-(nowTime%1000))/1000;
    const remainingTime = endTime - nowTime

    var h = Math.floor(remainingTime / 3600);
    var m = Math.floor(remainingTime % 3600 / 60);
    var s = Math.floor(remainingTime % 3600 % 60);

    const hLength = `${h}`.length
    const mLength = `${m}`.length
    const sLength = `${s}`.length

    var hDisplay = h > 0 ? (hLength < 2 ? "0"+h :h + "h " ): "00";
    var mDisplay = m > 0 ? (mLength < 2 ? "0"+m :m + "m " ) : "00";
    var sDisplay = s > 0 ? (sLength < 2 ? "0"+s :s + "s" ): "00";

    return hDisplay+mDisplay+sDisplay;
}
