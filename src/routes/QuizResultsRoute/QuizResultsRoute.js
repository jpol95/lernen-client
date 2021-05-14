import React, { useState } from 'react';
import QuizView from '../../components/QuizView/QuizView';
import SqrelsService from '../../services/sqrels-api-service';

function QuizResultsRoute(props) {
    const [sqrel, setSqrel] = useState()

    useEffect(() => {
        const loadData = async () => {
          const loadedSqrel = await SqrelsService.getSqrelById(Number(props.match.params.id))
          setSqrel(loadedSqrel);
          setSelected(new Array(loadedQs.length).fill(-1));
        };
        loadData();
      }, []);
    return (
        <div>
            <QuizView />
        </div>
    );
}

export default QuizResultsRoute;

//finish this thingy