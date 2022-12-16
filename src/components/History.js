import { useState, useEffect } from 'react';

const SEC_PER_HOUR = 3600;

const History = ({ userId }) => {

    const [maxSeconds, setMaxSeconds] = useState(16*3600);
    const [points, setPoints] = useState([]);
    const [fromHour, setFromHour] = useState(8);
    const [toHour, setToHour] = useState(24);
    
    function GetNumHours() {
        if (parseInt(fromHour) !== parseInt(fromHour) || 
            parseInt(toHour) !== parseInt(toHour)) {
            return 24;
        } 
        return toHour - fromHour;
    }
    
    function GetPresenceColor(presence) {
        let colors = ['gray','blue','green','orange'];
        return colors[presence]
    }
    
    function GetPresenceTop(presence) {
        let tops = ['25%','40%','55%','70%']
        return tops[presence]
    }
    
    function GetPointStyle(point) {
        return {
            left: point.left_offset,
            top: point.top_offset,
            background: point.background_color
        }
    }
    
    function GetBarStyle(point) {
        return {
            width: point.diff_seconds/maxSeconds.value * 100 + '%',
            left: (point.curr_seconds-point.diff_seconds)/maxSeconds.value * 100 + '%',
            background: GetPresenceColor(point.last_presence),
            top: GetPresenceTop(point.last_presence)
        }
    }
    
    function PointFromTimeObj(timeObj) {
        let arr = new Date(timeObj.timeNow).toTimeString().slice(0,8).split(":").map(x => parseInt(x));
        let curSecs = (arr[0]*60*60 + arr[1]*60 + arr[2]) - fromHour * SEC_PER_HOUR;
        let obj = {
            curr_presence: timeObj.status,
            curr_seconds: curSecs,
            last_presence: timeObj.lastStatus,
            diff_seconds: timeObj.diffTime,
            background_color: GetPresenceColor(timeObj.status),
            top_offset: GetPresenceTop(timeObj.status),
            left_offset: curSecs/maxSeconds * 100 +'%'
        }; 
        return obj;
    }
    
    function GetLinesContent() {
        let content = [];
        let numHours = GetNumHours();
        for (let n=0;n<numHours;n++) {
            content.push(
                <div className="line" key={n} style={{left: n/(numHours)*100 + '%'}}>
                    {n !== 24 ? parseInt(n)+parseInt(fromHour) : ""}
                </div>)
        }
        return content;
    }
    
    function GetPointsContent() {
        if (points.length === 0) return;
        let content = [];
        points.forEach(point => {
            content.push(
                <>
                    <div className="point" style={GetPointStyle(point)}></div>
                    <div className="bar" hidden={true} style={GetBarStyle(point)}></div>
                </>
            )
        })
        return content;
    }

    // Queries the server and updates 'points' when userId changes
    useEffect(() => { 
		(async function fetchData() {
            setMaxSeconds(GetNumHours()*SEC_PER_HOUR);
			const response = await fetch(`http://localhost:8000/api/logged/today/${userId}`);
			const data = await response.json();
            const results = data[0];
            const newPoints = [];
            results.forEach(timeObj => {
                newPoints.push(PointFromTimeObj(timeObj));
            })
            setPoints(newPoints);
        })();
	}, [userId])  

    function fromChanged(v) {
        if (v === v) setFromHour(v);
    }

    function toChanged(v) {
        if (v === v) setToHour(v);
    }

    return (
        <> 
            <div className="mx-2 mt-2 d-flex justify-content-between">
                <input type="text" className="form-control form-control-sm text-center" style={{width:'50px', display:'inline-block'}} id="FromInput" onChange={e=>fromChanged(parseInt(e.target.value))} placeholder="8"/>
                <button type="button" className="btn btn-light me-auto ms-3">Refresh</button>
                <input type="text" className="form-control form-control-sm text-center" style={{width:'50px', display:'inline-block'}} id="ToInput" onChange={e=>toChanged(parseInt(e.target.value))} placeholder="24"/>
            </div>
            <div id="user-history" className="m-2">
                <div id="user-history-bk" className="w-100 h-100">
                    <>{ GetLinesContent() }</>
                    <>{ points.length > 0 && GetPointsContent() }</>
                </div>
            </div>
        </>
    )
}

export default History;