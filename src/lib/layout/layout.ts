type Ratio = [number, number, string]
type Orientation = 'square' | 'portrait' | 'landscape'

const stringToRatio = (input: string): Ratio => {
  let A
  if (input.indexOf(":") > 0) A = input.split(":")
  if (input.indexOf("×") > 0) A = input.split("×")
  if (input.indexOf("x") > 0) A = input.split("x") 
  let output = A?.map((value: string) => {
    return Number(value);
  })
  output?.push(input);
  return output as Ratio
}

const ratioOrientation = (input: Ratio): Orientation => {
  let orientation: Orientation;
  let diff = input[0] - input[1];
  orientation = 'square';
  if (diff < 0) orientation = 'portrait'
  if (diff > 0) orientation = 'landscape';
  return orientation;
}

const indexFromMatch = (match:Ratio, options:string[]):number => {
  return options.indexOf(match[2]);
}

export const bestAspectMatch = (input: string, options: string[]): number | null => {
  console.log('bestAspectMatch', input, options)
  let base: Ratio = stringToRatio(input);
  let allRatios: Ratio[] = options.map((item => stringToRatio(item)))
  let output: Ratio[];
  
  // figure out orientation
  let orientation = ratioOrientation(base);

  // ... remove items of diff orientation
  output = allRatios.filter((item) => {
    let O = ratioOrientation(item);
    return O === orientation;
  })

  // ... reject items that are too big
  output = output.filter((item) => {
    if (item[0] > base[0] || item[1] > base[1]) {
      return null;
    } else {
      return true;
    }
  })

  // this isn't really working how I'd like
  output = output.sort((a, b) => {
    return compareRatios(a, b, base);
  })

  
  console.log('OUTPUT', `base:${base[2]}`, `results: ${output.length}`, output);
  if (output.length > 0) {
    return indexFromMatch(output[0], options);
  } else {
    return null
  }
}

const compareRatios = (a: Ratio, b: Ratio, c: Ratio) => {
  console.log('compareRatios', a[2], b[2], 'with', c[2])
  let x = a[0] * a[1];
  let y = b[0] * b[1];
  let z = c[0] * c[1];
  let aa = z - x;
  let bb = z - y;
  return bb / aa
}

/*

4:3, 16:9 => 9:7

4:3
C[0] - A[0] = 5
C[1] - A[1] = 4
5 - 4 = 1

16:9
C[0] - B[0] = -7
C[1] - B[1] = -2
-7 + -2 = -9

//


4:3, 16:9 => 11:5

4:3
C[0] - A[0] = 7
C[1] - A[1] = 2
7 - 2 = 5

16:9
C[0] - B[0] = -5
C[1] - B[1] = -4
-5 + -4 = -9

*/