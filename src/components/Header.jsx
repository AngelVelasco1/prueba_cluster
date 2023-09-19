import React from 'react'

export default function Header() {
    const send =  async() => {
        let data = await( await fetch("http://127.1.1.2:5082/user")).json()
        console.log(data);
}
send();
return (
    <div>Header</div>
)
}
