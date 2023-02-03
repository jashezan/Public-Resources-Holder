let sampleRegEx: RegExp = /^[+ 0-9]{7}$/;
console.log(sampleRegEx.test('732g'))
// result: false
console.log(sampleRegEx.test('453gh67'))
// result: false
console.log(sampleRegEx.test('2355575'))
// result: true
console.log(sampleRegEx.test('7878734'))
// result: true
console.log(sampleRegEx.test('423%^'))
// result: false
console.log(sampleRegEx.test('abcdefg'))
// result: false
console.log(sampleRegEx.test('@#$$#%5'))
// result: false
