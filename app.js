document.getElementById('query_string').textContent = location.search
const qs = simpleQueryString.parse(location.search)
const qsKeys = Object.keys(qs)
qsKeys.sort()
for (let k of qsKeys) {
  const tr = document.createElement('tr')

  const td1 = document.createElement('td')
  tr.appendChild(td1)
  td1.textContent = k

  const td2 = document.createElement('td')
  tr.appendChild(td2)

  const code = document.createElement('code')
  code.textContent = qs[k]
  td2.appendChild(code)

  document.getElementById('params').appendChild(tr)
}
