const waitSeconds = (n=1) => {
    return new Promise((resolve) => setTimeout(() => {
        console.log(`promise started after ${n} seconds`)
        resolve()
    }, 1000 * n))
}

const handleClick = async () => {
    console.log("clicked")
    await waitSeconds(2)
    console.log("after 2 seconds")
    await waitSeconds(3)
    console.log("after 3 seconds")
    await waitSeconds()
    console.log("after 1 second")
    await waitSeconds()
    console.log("click finished")
}

document.querySelector('#asyncButton').addEventListener("click", handleClick)

