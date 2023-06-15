import React, { useEffect, useMemo }  from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import "./ProjectSamples.css";
import { useTable } from 'react-table';

import projectSamples from "../../textContent/projectSamples.json";

function ProjectSamplesTable(props){
    window.scrollTo(0, 0);
    useEffect(() => {
        window.scrollTo(0, 0);
      
        return () => {
          window.scrollTo(0, 0);
        };
    }, [props.path]);

    const formattedPath = props.path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const breadcrumb = `> ${formattedPath}`;

    // Setup table
    const LinkCell = ({ value }) => (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      );
    const data = useMemo(() => projectSamples[props.path],[]);
    const columns = useMemo(() => [
        {
            Header: "Article name",
            accessor: "name"
        },
        {
            Header:"Date published",
            accessor: "date"
        },
        {
            Header: "Link",
            accessor: "link",
            Cell: LinkCell, 
        }
    ],[]);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data});

    return(
        <div className="container">
            <div className="row mt-4">
                <div className="col">
                    <div className="display-5 text-white">
                        {formattedPath}
                    </div>
                </div>
            </div>

            <div className="row mt-1 ">
                <div className="col mb-4">
                    <div className="text-white">
                        <Link to="/Projects" className="project-word">Projects</Link> {breadcrumb}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col text-white">
                    {/*Insert table here*/}
                    <div className="table-responsive">
                        <table className="table table-dark table-bordered table-hover " {...getTableProps()}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render("Header")}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map(row=>{
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell =>(
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSamplesTable;