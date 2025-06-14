//134. Handle Errors using try, catch, and finally
/*
try:block the code when an error occur
catch:executes when an error occur
finally:all execute
*/

try {
  let num = 5;
  //   console.log(num);
  //   console.log(num2);
  const num4 = num.toUpperCase();
  //   const num4 = "num".toUpperCase();
  console.log(num4);
} catch (error) {
  //   console.log(error);
  console.log(error.message);
} finally {
  //   console.log(num3);
  console.log("this block run always");
}
