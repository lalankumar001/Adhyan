import React from 'react'
import './BcaAllSub.css'

const BcaOS = () => {
    return (
        <div className='operating_system'>
            <span className='BcaHeading'>BACHELOR OF COMPUTER APPLICATIONS (BCA) DETAILED SYLLABUS</span>
            <hr />
            <div>
            <h3>Paper: Operating System </h3>
            </div>
        <hr />
            <span><h4>UNIT-1</h4></span>
            <p><h4>Introduction :</h4>What is an Operating System, Simple Batch Systems, Multiprogrammed Batches systems, Time-Sharing Systems, Personal-computer systems, Parallel systems, Distributed Systems, Real-Time Systems Memory Management: Background, Logical versus Physical Address space, swapping, Contiguous allocation, Paging, Segmentation Virtual Memory: Demand Paging, Page Replacement, Page-replacement Algorithms, Performance of Demand Paging, Allocation of Frames, Thrashing, Other Considerations</p>
        <hr />
            <span><h4>UNIT-2</h4></span>
            <p><h4>Processes :</h4>Process Concept, Process Scheduling, Operation on Processes CPU Scheduling: Basic Concepts, Scheduling Criteria, Scheduling Algorithms, Multiple Processor Scheduling, Process Synchronization: Background, The Critical-Section Problem, Synchronization Hardware, Semaphores, Classical Problems of Synchronization.</p>
        <hr />
            <span><h4>UNIT-3</h4></span>
            <p><h4>Deadlocks :</h4> System Model, Deadlock Characterization, Methods for Handling Deadlocks, Deadlock Prevention, Deadlock Avoidance, Deadlock Detection, Recovery from Deadlock Device Management: Techniques for Device Management, Dedicated Devices, Shared Devices, Virtual Devices; Input or Output Devices, Storage Devices, Buffering, Secondary Storage Structure: Disk Structure, Disk Scheduling, Disk Management, Swap-Space Management, Disk Reliability.</p>
        <hr />    
            <span><h4>UNIT-4</h4></span>
           <p><h4>Information Management :</h4>Introduction, A Simple File System, General Model of a File System, Types of File System File-System Interface: File Concept, Access Methods, Directory Structure, Protection: Goals of protection, Domain of protection, Access rights, Consistency Semantics Security: Authentication, Program threats, System threats, Encryption.</p>
        <hr />
        </div>
    )
}

export default BcaOS
