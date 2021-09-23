function superbowlWin(record){
  // for (const results in record)
   // if (record.result === "W") 
    const winner = record.find(season => season.result === 'W')
     if (winner)
      {return winner.year}
    else
      return undefined


}