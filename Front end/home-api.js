export const GetData = async () => {
    const data = await fetch();
    const filteredData = await data.json();
    return filteredData;
}

export const SendData = async (data) => {
    await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
    });
}