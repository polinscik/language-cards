import dataArray from "../../testWords.json";


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
                        <td>{wordInfo.english}</td>
                        <td>{wordInfo.transcription}</td>
                        <td>{wordInfo.russian}</td>
                        <td>{wordInfo.tags}</td>
                    </tr>)
                }
            </table>
        </div>
    )
}

export default WordTable;