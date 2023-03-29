import { StyleSheet, Text, View, FlatList} from 'react-native';
import { useState } from 'react'

import CourseItem from './components/CourseItem'
import SearchBar from './components/SearchBar'
import CategoryRow from './components/CategoryRow'

// the following classes and loop were built as temporary placeholders until there is real data too display
class Course {
  constructor(key, title, author, subject, ageRange, image){
    this.key = key
    this.title = title;
    this.author = author;
    this.subject = subject
    this.ageRange = ageRange
    this.image = image
  }
}

class Category {
  constructor(key, subject, image){
    this.key = key
    this.subject = subject
    this.image = image
  }
}

let categories = []
let courses = []
for (let i = 0; i<10; i++){
  courses[i] = new Course(i, "Title of Course  "+ String(i),
  "Author Name " + i, "Subject", "Age Range",
  require('../images/placeholderCourse.png'))
  categories[i] = new Category(i, 
    'subject '+i, 
    require('../images/placeholderCategory.png'))
}
// this marks the end of the placeholder data 

// this loop creates a object with keys that match the keys for the course 
// categories, the values are bool variables which represent whether or not
// the category has been selected. used for the coloring of category 
// components and for filtering the search
const categoryStatesInit = {}
categories.forEach(category => {
    categoryStatesInit[category.key] = false
})


/**
 * Renders the course catalog screen, which displays a search bar, category filters, and a list of popular courses.
 * @returns {JSX.Element} The course catalog screen.
 */
export default function CourseCatalog() {
  // allow categories to be selected/unselected
  // data is sent as a prop through CategoryRow, then CourseCategory
  const [categoryStates, setCategoryState] = useState(categoryStatesInit);

  /**
   * Toggles the state of a category.
   * @param {string} key - The key of the category to toggle.
   * @returns {void}
   */
  const toggleCategory = (key) => {
    setCategoryState({
      ...categoryStates,
      [key]: !categoryStates[key],
    });
  };

  // separate list of categories into 2 for each row
  const categories1 = categories.slice(0, categories.length / 2);
  const categories2 = categories.slice(categories.length / 2);

  // right now displays every course as popular course. will need to be changed to support popular course list.
  return (
    <View style={styles.container}>
      <View style={styles.temporaryNavigationBanner}></View>
      <View style={styles.searchSectionContainer}>
        <View style={{ flex: 3 }}>
          <SearchBar />
        </View>
        <View style={styles.categoryRowView}>
          <CategoryRow
            categories={categories1}
            categoryStates={categoryStates}
            onToggle={toggleCategory}
          />
        </View>
        <View style={styles.categoryRowView}>
          <CategoryRow
            categories={categories2}
            categoryStates={categoryStates}
            onToggle={toggleCategory}
          />
        </View>
      </View>
      <View style={styles.popularCourses}>
        <Text style={styles.popularCoursesTitle}>Popular Courses</Text>
        <View style={styles.courseListContainer}>
          <FlatList
            style={{ flex: 1 }}
            data={courses}
            renderItem={(itemData) => {
              return (
                <View style={{ alignItems: "center", marginBottom: 35 }}>
                  <CourseItem course={itemData.item} />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // this is temporary until we have a navigation banner on top the page
  temporaryNavigationBanner: {
    height: 62
  },

  searchSectionContainer: {
    backgroundColor:  '#BCE0FD',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 23,
  },

  categoryRowView: {
    flex:4,
    paddingVertical: 5
  },

  popularCourses: {
    width: "100%",
    hight: "100%",
    flex: 4,
    alignItems: 'center',
  },

  popularCoursesTitle: {
    padding:14, 
    fontWeight: "700", 
    color: '#2699FB', 
    fontSize: 18
  },

  courseListContainer: {
    flex: 9,
    width: "98%",
    height: "100%"
  }
});
