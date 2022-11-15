const name = '이호준'
const age = 10

function 인사(문구, 이름, 나이){
    console.log(문구)
    console.log(이름)
    console.log(나이)
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
}

// $표시 기준으로 나눠서 배열에 들어감
// ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)]
const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

console.log(인사문구)