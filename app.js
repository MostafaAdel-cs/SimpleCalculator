const btns = document.getElementsByClassName('btn')
const tools = document.getElementsByClassName('tool')
const output = document.getElementById('output')

let value1 // to save the first value to be used in the operation
let sign // to store the operator
let done // to know when doing other operation

for (const btn of btns) {
  btn.addEventListener('click', function () {
    if (done == true) {
      output.value = ``
      done = false
    }
    if (btn.textContent == '.') {
      if (!output.value.includes('.')) {
        output.value = `${output.value}${btn.textContent}`
      }
    } else {
      output.value = `${output.value}${btn.textContent}`
    }
  })
}

for (const tool of tools) {
  tool.addEventListener('click', function () {
    if (output.value == `-`) {
      done = false
    } else if (tool.textContent == 'x') {
      value1 = parseFloat(output.value)
      sign = 'x'
      output.value = ``
      done = false
    } else if (tool.textContent == '-') {
      if (output.value == ``) {
        output.value = `-`
        done = false
      } else {
        value1 = parseFloat(output.value)
        sign = '-'
        output.value = ``
        done = false
      }
    } else if (tool.textContent == '+') {
      value1 = parseFloat(output.value)
      sign = '+'
      output.value = ``
      done = false
    } else if (tool.textContent == '/') {
      value1 = parseFloat(output.value)
      sign = '/'
      output.value = ``
      done = false
    } else if (tool.textContent == 'C') {
      //to clear all
      value1 = null
      output.value = ``
      sign = null
      done = false
    } else if (tool.textContent == '=') {
      if (sign == '-') {
        let wantedValue = `${value1 - parseFloat(output.value)}`
        output.value = ``
        output.value = wantedValue
        done = true
        sign = null
      } else if (sign == '+') {
        let wantedValue = `${value1 + parseFloat(output.value)}`
        output.value = ``
        output.value = wantedValue
        done = true
        sign = null
      } else if (sign == 'x') {
        let wantedValue = `${value1 * parseFloat(output.value)}`
        output.value = ``
        output.value = wantedValue
        done = true
        sign = null
      } else if (sign == '/') {
        let wantedValue = `${value1 / parseFloat(output.value)}`
        output.value = ``
        output.value = wantedValue
        done = true
        sign = null
      }
    }
  })
}
