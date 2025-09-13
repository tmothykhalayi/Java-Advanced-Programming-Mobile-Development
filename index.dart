void main() {
  print('Welcome to Dart!');

  String name = 'Alice';
  int age = 25;
  double height = 5.6;
  bool isStudent = true;
  // Create a map of person details
  Map<String, dynamic> personDetails = {
    'name': name,
    'nickname': 'Ali',
    'age': age,
    'height': height,
    'isStudent': isStudent,
    'skills': ['Programming', 'Mathematics', 'Communication'],
    'address': {'city': 'New York', 'zipCode': 10001},
  };

  // Function to calculate future age
  int calculateFutureAge(int currentAge, int yearsAhead) => currentAge + yearsAhead;

  // Using higher order functions with a list
  List<String> courses = ['Dart', 'Flutter', 'Firebase', 'Cloud Computing'];
  var filteredCourses = courses.where((course) => course.startsWith('F')).toList();
  
  // Working with Future for asynchronous operations
  Future<String> fetchUserData() async {
    await Future.delayed(Duration(seconds: 1));
    return "User data retrieved";
  }

  // Print additional complex information
  print('Person details: $personDetails');
  print('Age after 5 years: ${calculateFutureAge(age, 5)}');
  print('Flutter related courses: $filteredCourses');
  fetchUserData().then((value) => print(value));

  print('Name: $name');
  print('Age: $age');
  print('Height: $height');
  print('Student: $isStudent');
}
