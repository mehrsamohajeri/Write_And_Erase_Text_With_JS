 let h3 = document.querySelector("h3")
        let i = 1
        let x = ""
        let k = 0
        let clear = setInterval(write, 100)
        const txt = ["Hello,", "My name is Mehrsa Mohajeri.", "I'm a frontend developer!"]

        num = 0
        function setname() {
            x = txt[num]
            if (num < txt.length - 1) {
                num++
            }
            else {
                num = 0
            }
        }

        function write() {
            if (i <= x.length) {
                h3.innerText = x.slice(0, i)
                i++
            }
            else {
                if (k >= 0) {
                    h3.innerText = x.slice(0, k)
                    k--
                }
                else {
                    setname()
                    i = 0
                    k = x.length
                }
            }
        }