var undef

module.exports = splice

function splice (arr, r, a) {
  r = r === undef ? [] : [].concat(r)
  a = a === undef ? [] : [].concat(a)

  var o = []
  var v, n, al = a.length
  var i = 0, l = arr.length
  while (v = arr[i++], i <= l) {
    if (~(n = r.indexOf(v)) && n >= al) continue
    o[o.length] = ~n ? a[n] : v
  }

  return o
}
