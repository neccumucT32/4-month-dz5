import { useState } from 'react';

function MainPage() {
    const [inputValue, setInputValue] = useState("");
    const [nameList, setNameList] = useState([]);

    const addName = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setNameList([...nameList, inputValue]);
            setInputValue("");
        }
    };

    const changeName = (index) => {
        if (inputValue.trim()) {
            const updatedList = [...nameList];
            updatedList[index] = inputValue;
            setNameList(updatedList);
            setInputValue("");
        }
    };

    let content;

    if (nameList.length === 0) {
        content = <p>Список пуст</p>;
    } else {
        content = (
            <div className="list">
                {nameList.map((name, index) => (
                    <div key={index}>
                        <span>{name}</span>
                        <button onClick={() => changeName(index)}>Поменять</button>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={addName}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>

            {content}
        </div>
    );
}

export default MainPage;
