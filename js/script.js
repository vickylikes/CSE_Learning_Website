/*
====================================================
VickyLikes Website Engine
Version : 1.0
====================================================
*/

"use strict";

/* ---------- Global Website Object ---------- */

const VickyLikes = {

    database: COURSE_DATABASE,

    version: "1.0",

    totalPhases: 0,

    totalCourses: 0,

    completedCourses: 0,

    bookmarkedCourses: 0

};


/* ---------- Count Everything ---------- */

function initializeWebsite() {

    let phaseCount = 0;

    let courseCount = 0;

    let completed = 0;

    for (const phase of VickyLikes.database) {

        phaseCount++;

        for (const course of phase.courses) {

            courseCount++;

            if (course.completed) {

                completed++;

            }

        }

    }

    VickyLikes.totalPhases = phaseCount;

    VickyLikes.totalCourses = courseCount;

    VickyLikes.completedCourses = completed;

}


/* ---------- Find Phase ---------- */

function getPhase(id) {

    return VickyLikes.database.find(

        phase => phase.id === id

    );

}


/* ---------- Find Course ---------- */

function getCourse(courseId) {

    for (const phase of VickyLikes.database) {

        const course = phase.courses.find(

            c => c.id === courseId

        );

        if (course) {

            return course;

        }

    }

    return null;

}


/* ---------- Save Data ---------- */

function saveProgress() {

    localStorage.setItem(

        "VickyLikesProgress",

        JSON.stringify(VickyLikes.database)

    );

}


/* ---------- Load Data ---------- */

function loadProgress() {

    const saved = localStorage.getItem(

        "VickyLikesProgress"

    );

    if (!saved)

        return;

    try {

        VickyLikes.database = JSON.parse(saved);

    }

    catch (error) {

        console.error(error);

    }

}


/* ---------- Start Website ---------- */

loadProgress();

initializeWebsite();

console.log(

    "VickyLikes Engine Loaded"

);

console.log(

    "Phases :",

    VickyLikes.totalPhases

);

console.log(

    "Courses :",

    VickyLikes.totalCourses

);
/*==========================================================
Generate Phase Cards Automatically
==========================================================*/

function loadPhaseCards() {

    const phaseGrid = document.getElementById("phaseGrid");

    if (!phaseGrid) return;

    phaseGrid.innerHTML = "";

    VickyLikes.database.forEach((phase) => {

        const card = document.createElement("a");

        card.className = "course-card";

        card.href = "phases/" + phase.id + ".html";

        card.innerHTML = `

            <div class="complete-dot"></div>

            <h3>${phase.title}</h3>

            <p>${phase.description}</p>

            <p><strong>${phase.courses.length}</strong> Courses</p>

        `;

        phaseGrid.appendChild(card);

    });

}

loadPhaseCards();
/*==================================================
Load Phase 1 Courses
==================================================*/

function loadPhaseOneCourses() {

    const courseGrid = document.getElementById("courseGrid");

    if (!courseGrid) return;

    const phase = getPhase("phase1");

    if (!phase) return;

    courseGrid.innerHTML = "";

    phase.courses.forEach((course) => {

        const card = document.createElement("a");

        card.className = "course-card";

        card.href = course.url || "#";

        card.target = "_blank";

        card.innerHTML = `

            <div class="complete-dot"></div>

            <h3>${course.name}</h3>

            <p>${course.provider}</p>

            <p>${course.difficulty}</p>

        `;

        courseGrid.appendChild(card);

    });

}

loadPhaseOneCourses();
/*==================================================
Load Phase 2 Courses
==================================================*/

function loadPhaseTwoCourses() {

    const courseGrid = document.getElementById("courseGrid2");

    if (!courseGrid) return;

    const phase = getPhase("phase2");

    if (!phase) return;

    courseGrid.innerHTML = "";

    phase.courses.forEach((course) => {

        const card = document.createElement("a");

        card.className = "course-card";

        card.href = course.url || "#";

        card.target = "_blank";

        card.innerHTML = `

            <div class="complete-dot"></div>

            <h3>${course.name}</h3>

            <p>${course.provider}</p>

            <p>${course.difficulty}</p>

        `;

        courseGrid.appendChild(card);

    });

}

loadPhaseTwoCourses();