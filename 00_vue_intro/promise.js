// 외부에 요청을 보내서 그 결과를 출력하는 코드를 작성하고자 한다.
//  1. 몇 초 뒤에 데이터가 응답되면
//  2. 데이터를 변수에 저장하여 출력!       

// function getData() {
//   let data 

//   setTimeout(() => {
//     console.log('INFO: 요청을 보냈습니다.')
//     data = {'data': 'somedata'}
//   }, 100)

//   return data 
// }

// function prindData() {
//   let response1 = getData()
//   console.log(response1)
// }

// prindData()

function getDataCallback(callback) { // 2. callback 으로 함수가 넘어옴. 즉, callback = 익명함수 
  setTimeout(() => {
    console.log('INFO: 요청을 보냈습니다.')
    const data = {'data': 'somedata'}
    callback(data) // 3. 다 끝나고 저 함수를 실행 

    // callback hell 
    // getDataCallback(function(data2) {
    //   if (data === data2) {
    //     getDataCallback(function)
    //   }
    // })
  }, 100)
  // return data // undefined
}

// data 가 도착하고 나서 해야 될 일을 함수로 넘겨준다.
// 1. 출력하는 작업을 하는 함수를 인수로 넘김 
getDataCallback(function(data) {
  console.log(data) // callback function 
})


// 1. 다짐을 반환한다. // Promise 를 반환한다. 
// 2. 어떤 다짐? ==> 데이터를 요청한 뒤 어떻게 할거야! // Promise 안쪽의 함수에 표현한다. 
function getDataPromise() { // === axios.get(DATA_URL)
  // 반환부터 하고 시작  
  // 새로운 인스턴스를 생성해서 반환 
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (true) {
        console.log('INFO: 요청을 보냈습니다.')
        const data = {'data': 'somedata'}
        resolve(data) // .then 으로 꺼낼 수 있는 객체 
      } else {
        reject('통과하지 못했습니다.')
      }
    }, 100)

  })
}

// console.log(getDataPromise()) // Promise <pending>
// getDataPromise()
//   .then(response => {
//     console.log(1)
//     console.log(response)
//     // return 을 사용하면 두번째 작업으로 값을 넘겨줄수있다. 
//     return response.data
//   })
//   // 2번째 .then 가능 
//   // 순서대로 처리 
//   // 이게 되기 때문에 callback 보다 promise 를 선호 
//   .then(data => {
//     console.log(data)
//     console.log(2)
//   })
//   // .catch 는 가장 마지막에 하나만 있으면 된다. 
//   .catch(error => {
//     console.error(error)
//   })


// async 비동기적인 함수를 동기적으로 처리하겠다는 선언 
const handleData = async function() {
  // getDataPromise().then(response => {
  //   console.log(response)
  //   // 이후 작업
  // })

  // 얘를 가지고 올때까지 기다리겠다.
  const response = await getDataPromise()
  console.log(response)
}

handleData()