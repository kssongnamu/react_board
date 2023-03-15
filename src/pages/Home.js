import React from 'react'
import Pagination from '../components/Pagination'

function Home() {
    return (
        <div>        
            <div className='row mt-5'>
                <table class="table table-hover">
                    <colgroup>
                        <col style={{'width': '50px'}}></col>
                        <col></col>
                        <col style={{'width': '100px'}}></col>
                        <col style={{'width': '150px'}}></col>
                    </colgroup>
                    <thead>
                        <tr>
                        <th className='text-center'>번호</th>
                        <th >제목</th>
                        <th >글쓴이</th>
                        <th className='text-center'>글쓴시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th className='text-center'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td className='text-center'>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='row mt-3'>
                <Pagination />
            </div>
        </div>
    )
}

export default Home;