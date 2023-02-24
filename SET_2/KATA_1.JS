/*  ----------------------------Partition On-------------------------------------------------------------
 Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).   */


function partitionOn(pred, items) {
    let tArr =[];
    let fArr= [];
    for (let i = 0; i < items.length; i++){
        pred(items[i]) == true ?
            tArr.push(items[i]):
            fArr.push(items[i]);
  } 
  while (items.length != 0){
      items.pop()
   } 
  items.push(...fArr,...tArr);
  return items.indexOf(tArr[0]);
  }
  // input:[1, 2, 3, 4, 5, 6];
  // output:[1, 3, 5, 2, 4, 6];