import P1_Details from '../models/P1_Details';
import P2_Details from '../models/P2_Details';
import P3_Details from '../models/P3_Details';
import P4_Details from '../models/P4_Details';
import P6_Details from '../models/P6_Details';
import P7_Details from '../models/P7_Details';
import P8_Details from '../models/P8_Details';
import P9_Details from '../models/P9_Details';
import P12_Details from '../models/P12_Details';
import P13_Details from '../models/P13_Details';
import Upload from '../components/upload';

const Setup = () => {
    return (
        <div>
            <center>
                <Upload /> <br />
                <P1_Details /><br />
                <P2_Details /><br />
                <P3_Details /><br />
                <P4_Details /><br />
                <P6_Details /><br />
                <P7_Details /> <br />
                <P8_Details /> <br />
                <P9_Details /> <br />
                <P12_Details /> <br />
                <P13_Details /> <br />
                
                <footer id="footer">Copyright &copy; 2022</footer>
            </center>

        </div>
    )
}

export default Setup