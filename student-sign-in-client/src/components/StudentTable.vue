<template>
    
      <div>

      <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student List</h4>

            <div class="edit-table-toggle form-check">
                <input id="edit-table" type="checkbox" 
                class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label"> Edit Table</label>
            </div>


            <div id="student-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                        <th v-show="editTable">Delete</th>                        
                    </tr>
                    
                    <student-row
                        v-for="student in students" 
                        v-bind:student="student" 
                        v-bind:key="student.starID" 
                        v-bind:edit="editTable"
                        v-on:arrived-or-left="arrivedOrLeft"
                        v-on:delete-student="deleteStudent">
                    </student-row>
                </table>
            </div>
        </div>

    </div>

</template>

<script>

 import StudentRow from '@/components/StudentRow.vue' 
   

export default {
    name: 'StudentTable',
    components: {
        StudentRow // creates student row
    },
    emits:['student-arrived-or-left'] ,
    props: {
        students: Array
    },
    data() {
        return {
            editTable: false
        }
    },
    methods: {
        arrivedOrLeft (student, present) {
            // TODO Emit message to parent
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent(student){
            this.$emit('delete-student', student)
        }
    }
}
</script>

<style scoped>

.present {
    color: gray;
    font-style: italic;
}

.absent {
    color: black;
    font-weight: bold;

}

</style>
