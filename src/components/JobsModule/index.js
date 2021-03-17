import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import jobs from '../../data/jobs/jobs.json'
import ExternalLink from 'components/ExternalLink'

const JobsModule = () => (
    <div className={clsx('container', styles.jobsContainer)}>
        <div className={styles.categoryContainer}>
            <table className={styles.jobsTable}>
            <thead>
                <tr>
                    <th>Development & <br /> Engineering</th>
                </tr>
            </thead>
            <tbody>
                {jobs['Development & Engineering'].map((job, i) => (
                    <tr key={`de${i}`}>
                        <td>
                        <ExternalLink link={job.link} text={job.title} /> <br />
                        {job.location}
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        <div className={styles.comsAndOps}>
        <table className={styles.jobsTable}>
            <thead>
                <tr>
                    <th>Communications & <br /> Marketing</th>
                </tr>
            </thead>
            <tbody>
            {jobs['Communications & Marketing'].map((job, i) => (
                <tr key={`cm${i}`}>
                    <td>
                    <ExternalLink link={job.link} text={job.title} /> <br />
                    {job.location}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        <table className={styles.jobsTable}>
        <thead>
                <tr>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
            {jobs['Operations'].map((job, i) => (
                <tr key={`o${i}`}>
                    <td>
                    <ExternalLink link={job.link} text={job.title} /> <br />
                    {job.location}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
);

export default JobsModule;