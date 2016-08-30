export function assign2(...objects) {
  var init = objects[0];
  for (var i = 1; i < objects.length; i++) {
    var obj = objects[i];
    for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
        init[k] = obj[k];
      }
    }
  }
  return init;
}
