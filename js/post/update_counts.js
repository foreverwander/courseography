creditCountSpec = 0;
creditCountMaj = 0;
creditCountMin = 0;
creditCount300and400 = {'Spec': 0, 'Maj': 0, 'Min': 0};


/**
 * Updates number of completed courses in Specialist.
**/
function updateCompletedSpecCourses () {
    'use strict';

    for (var courseCode in completed_spec) {
        if (completed_spec.hasOwnProperty(courseCode)) {
            if (getCookie(courseCode) === 'active' || getCookie(courseCode) === 'overridden') {
                if (completed_spec[courseCode] < 1) {
                    completed_spec[courseCode] += 1;
                    if (courseCode === 'Calc1') {
                        creditCountSpec += 1;
                    } else {
                        creditCountSpec += 0.5;
                    }
                } 
            } else if ((getCookie(courseCode) === 'inactive' || getCookie(courseCode) === 'takeable')
                       && (completed_spec[courseCode] > 0)) {
                    completed_spec[courseCode] -= 1;
                    if (courseCode === 'Calc1') {
                        creditCountSpec -= 1;
                    } else {
                        creditCountSpec -= 0.5;
                    }
            }      
        }
    }
}


/**
 * Updates number of completed courses in Major.
**/
function updateCompletedMajCourses () {
    'use strict';

    for (var courseCode in completed_maj) {
        if (completed_maj.hasOwnProperty(courseCode)) {
            if (getCookie(courseCode) === 'active' || getCookie(courseCode) === 'overridden') {
                if (completed_maj[courseCode] < 1) {
                    completed_maj[courseCode] += 1;
                    if (courseCode === 'Calc1') {
                        creditCountMaj += 1.0;
                    } else {
                        creditCountMaj += 0.5;
                    }
                } 
            } else if ((getCookie(courseCode) === 'inactive' || getCookie(courseCode) === 'takeable')
                        && (completed_maj[courseCode] > 0)) {
                completed_maj[courseCode] -= 1;
                if (courseCode === 'Calc1') {
                    creditCountMaj -= 1.0;
                } else {
                    creditCountMaj -= 0.5;
                }
            }
        }       
    }
}


/**
 * Updates number of completed courses in Minor.
**/
function updateCompletedMinCourses() {
    'use strict';

    for (var courseCode in completed_min) {
        if (completed_min.hasOwnProperty(courseCode)) {
            if (getCookie(courseCode) === 'active' || getCookie(courseCode) === 'overridden') {
                if (completed_min[courseCode] < 1) {
                    completed_min[courseCode] += 1;
                    creditCountMin += 0.5;
                } 
            } else if ((getCookie(courseCode) === 'inactive' || getCookie(courseCode) === 'takeable')
                           && (completed_min[courseCode] > 0)) {
                completed_min[courseCode] -= 1;
                creditCountMin -= 0.5;
            }
        }       
    }
}


/**
 * Updates number of 300 level category completed courses.
 **/
function update300s() {
    'use strict';


    for (var courseCode in level300) {
        if (level300.hasOwnProperty(courseCode)) {
            if ((getCookie(courseCode) === 'active' || getCookie(courseCode) === 'overridden') 
                && (active300s.indexOf(courseCode) === -1)) {
                active300s.push(courseCode);
                if ((CSCinq.indexOf(courseCode) > -1) && (activeInq.indexOf(courseCode) === -1)) { // check if Inquiry Course
                    activeInq.push(courseCode);
                }  
            } else if ((getCookie(courseCode) === 'inactive' || getCookie(courseCode) === 'takeable') 
                       && (active300s.indexOf(courseCode) > -1)) {
                var index300 = active300s.indexOf(courseCode);
                active300s.splice(index300, 1);
                var indexInq = activeInq.indexOf(courseCode);
                if (indexInq > -1) {
                    activeInq.splice(indexInq, 1);
                }
            }
        }
    }       
}


/**
 * Updates number of 400 level category completed courses.
**/
function update400s() {
    'use strict';

    for (var courseCode in level400) {
        if (level400.hasOwnProperty(courseCode)) {
            if ((getCookie(courseCode) === 'active' || getCookie(courseCode) === 'overridden') 
                && (active400s.indexOf(courseCode) === -1)) {
                    active400s.push(courseCode);
                    if ((CSCinq.indexOf(courseCode) > -1) && (activeInq.indexOf(courseCode) === -1)) { // check if Inquiry Course
                        activeInq.push(courseCode);
                    }
            } else if ((getCookie(courseCode) === 'inactive' || getCookie(courseCode) === 'takeable') 
                       && (active400s.indexOf(courseCode) > -1)) {
                var index400 = active400s.indexOf(courseCode);
                var indexInq = activeInq.indexOf(courseCode);
                active400s.splice(index400, 1);
                if (indexInq > -1) {
                    activeInq.splice(indexInq, 1);
                }
            }
        }       
    }
}

