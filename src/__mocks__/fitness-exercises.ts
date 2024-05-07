import { ISet } from "../context/workout-context/workout-context.interface";

export interface IFitnessExercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  image: string | null;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
  sets?: ISet[];
}
export const fitnessExercises: IFitnessExercise[] = [
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "0002",
    image: null,
    name: "45° side bend",
    target: "abs",
    secondaryMuscles: ["obliques"],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
      "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
      "Pause for a moment at the bottom, then slowly return to the starting position.",
      "Repeat on the other side.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "0003",
    image: null,
    name: "air bike",
    target: "abs",
    secondaryMuscles: ["hip flexors"],
    instructions: [
      "Lie flat on your back with your hands placed behind your head.",
      "Lift your legs off the ground and bend your knees at a 90-degree angle.",
      "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
      "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
      "Continue alternating sides in a pedaling motion for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "1512",
    image: null,
    name: "all fours squad stretch",
    target: "quads",
    secondaryMuscles: ["hamstrings", "glutes"],
    instructions: [
      "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
      "Extend one leg straight back, keeping your knee bent and your foot flexed.",
      "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
      "Hold this position for 20-30 seconds.",
      "Switch legs and repeat the stretch on the other side.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "0006",
    image: null,
    name: "alternate heel touchers",
    target: "abs",
    secondaryMuscles: ["obliques"],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Extend your arms straight out to the sides, parallel to the ground.",
      "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
      "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "0007",
    image: null,
    name: "alternate lateral pulldown",
    target: "lats",
    secondaryMuscles: ["biceps", "rhomboids"],
    instructions: [
      "Sit on the cable machine with your back straight and feet flat on the ground.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "1368",
    image: null,
    name: "ankle circles",
    target: "calves",
    secondaryMuscles: ["ankle stabilizers"],
    instructions: [
      "Sit on the ground with your legs extended in front of you.",
      "Lift one leg off the ground and rotate your ankle in a circular motion.",
      "Perform the desired number of circles in one direction, then switch to the other direction.",
      "Repeat with the other leg.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "3293",
    image: null,
    name: "archer pull up",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
      "Engage your core and pull your shoulder blades down and back.",
      "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
      "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
      "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
      "Alternate sides with each repetition.",
    ],
  },
  {
    bodyPart: "chest",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "3294",
    image: null,
    name: "archer push up",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders", "core"],
    instructions: [
      "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
      "Extend one arm straight out to the side, parallel to the ground.",
      "Lower your body by bending your elbows, keeping your back straight and core engaged.",
      "Push back up to the starting position.",
      "Repeat on the other side, extending the opposite arm out to the side.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "2355",
    image: null,
    name: "arm slingers hanging bent knee legs",
    target: "abs",
    secondaryMuscles: ["shoulders", "back"],
    instructions: [
      "Hang from a pull-up bar with your arms fully extended and your knees bent at a 90-degree angle.",
      "Engage your core and lift your knees towards your chest, bringing them as close to your elbows as possible.",
      "Slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "2333",
    image: null,
    name: "arm slingers hanging straight legs",
    target: "abs",
    secondaryMuscles: ["shoulders", "back"],
    instructions: [
      "Hang from a pull-up bar with your arms fully extended and your legs straight down.",
      "Engage your core and lift your legs up in front of you until they are parallel to the ground.",
      "Hold for a moment at the top, then slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "3214",
    image: null,
    name: "arms apart circular toe touch (male)",
    target: "glutes",
    secondaryMuscles: ["hamstrings", "quadriceps", "calves"],
    instructions: [
      "Stand with your feet shoulder-width apart and arms extended to the sides.",
      "Keeping your legs straight, bend forward at the waist and reach down towards your toes with your right hand.",
      "As you reach down, simultaneously lift your left leg straight up behind you, maintaining balance.",
      "Return to the starting position and repeat the movement with your left hand reaching towards your toes and your right leg lifting up behind you.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "3204",
    image: null,
    name: "arms overhead full sit-up (male)",
    target: "abs",
    secondaryMuscles: ["hip flexors", "lower back"],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Extend your arms overhead, keeping them straight.",
      "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is upright.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "chest",
    equipment: "leverage machine",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "0009",
    image: null,
    name: "assisted chest dip (kneeling)",
    target: "pectorals",
    secondaryMuscles: ["triceps", "shoulders"],
    instructions: [
      "Adjust the machine to your desired height and secure your knees on the pad.",
      "Grasp the handles with your palms facing down and your arms fully extended.",
      "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
      "Pause for a moment, then push yourself back up to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "assisted",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "0011",
    image: null,
    name: "assisted hanging knee raise",
    target: "abs",
    secondaryMuscles: ["hip flexors"],
    instructions: [
      "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
      "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
      "Pause for a moment at the top of the movement, squeezing your abs.",
      "Slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "assisted",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "0010",
    image: null,
    name: "assisted hanging knee raise with throw down",
    target: "abs",
    secondaryMuscles: ["hip flexors", "lower back"],
    instructions: [
      "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
      "Engage your core and lift your knees towards your chest, keeping your legs together.",
      "Once your knees are at chest level, explosively throw your legs down towards the ground, extending them fully.",
      "Allow your legs to swing back up and repeat the movement for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "lower legs",
    equipment: "assisted",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "1708",
    image: null,
    name: "assisted lying calves stretch",
    target: "calves",
    secondaryMuscles: ["hamstrings"],
    instructions: [
      "Lie on your back with your legs extended.",
      "Bend one knee and place your foot flat on the ground.",
      "Using your hands or a towel, gently pull your toes towards your body, feeling a stretch in your calf.",
      "Hold the stretch for 20-30 seconds.",
      "Release the stretch and repeat on the other leg.",
    ],
  },
  {
    bodyPart: "upper legs",
    equipment: "assisted",
    gifUrl: "https://v2.exercisedb.io/image/IhSIJPWFEJU76Q",
    id: "1709",
    image: null,
    name: "assisted lying glutes stretch",
    target: "glutes",
    secondaryMuscles: ["hamstrings"],
    instructions: [
      "Lie on your back with your legs extended.",
      "Bend your right knee and place your right ankle on your left thigh, just above the knee.",
      "Grasp your left thigh with both hands and gently pull it towards your chest.",
      "Hold the stretch for 20-30 seconds.",
      "Release and repeat on the other side.",
    ],
  },
];
