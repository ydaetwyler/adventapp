const getRangeArr = arr => {
    const start = parseInt(arr[0])
    const end = parseInt(arr[1])
    return (end - start) 
        ? Array.from({ length: end - start + 1 }, (_, i) => i + start)
        : [start]
}

export default getRangeArr