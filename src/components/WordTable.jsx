const dataArray = [];


function WordTable(){
    return(
        <div>
            <table>
                <tr>
                    <th>Слово</th>
                    <th>Произношение</th>
                    <th>Перевод</th>
                    <th>Теги</th>
                </tr>
                {
                    dataArray.map((wordInfo)=>
                    <tr>
                        <td>{wordInfo.word}</td>
                        <td>{wordInfo.pronunciation}</td>
                        <td>{wordInfo.translation}</td>
                        <td>{wordInfo.theme}</td>
                    </tr>)
                }
            </table>
        </div>
    )
}

export default WordTable;