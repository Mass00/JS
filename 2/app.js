// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if( prop === 'tracks' && value !== ''){
    records[id].hasOwnProperty('tracks') ? records[id]['tracks'].push(value) : records[id].tracks = [value];
    } else if(value !== ''){
        records[id][prop] = value;
    } else if(value === ''){
         delete records[id][prop];
     }
    records[id]['tracks'].push(value)
    console.log(records);
    return records;
  }
  
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");