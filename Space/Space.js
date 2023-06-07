  // Rocket Equation
  function calculateRocketEquation() {
    var exhaustVelocity = parseFloat(document.getElementById("exhaustVelocity").value);
    var initialMass = parseFloat(document.getElementById("initialMass").value);
    var finalMass = parseFloat(document.getElementById("finalMass").value);
    var deltaV = exhaustVelocity * Math.log(initialMass / finalMass);
    var massRatio = initialMass / finalMass;
    var requiredFuelMass = initialMass - finalMass; 
    var maxPayloadMass = finalMass;
    
    document.getElementById("deltaVResult").innerHTML = "Delta-v: " + deltaV.toFixed(2) + " m/s";
    document.getElementById("massRatioResult").innerHTML = "Mass Ratio: " + massRatio.toFixed(2);
    document.getElementById("requiredFuelMassResult").innerHTML = "Required Fuel Mass: " + requiredFuelMass.toFixed(2) + " kg";
    document.getElementById("maxPayloadMassResult").innerHTML = "Max Payload Mass: " + maxPayloadMass.toFixed(2) + " kg";
  }
  
  // Specific Impulse
  function calculateSpecificImpulse() {
    var thrust = parseFloat(document.getElementById("thrust").value);
    var propellantFlowRate = parseFloat(document.getElementById("propellantFlowRate").value);
    var specificImpulse = thrust / (9.81 * propellantFlowRate);
    document.getElementById("specificImpulseResult").innerHTML = "Specific Impulse: " + specificImpulse.toFixed(2) + " s";
  }
  
  // Rocket Design Parameters
  function calculateRocketDesign() {
        var engineThrust = parseFloat(document.getElementById("engineThrust").value);
        var rocketMass = parseFloat(document.getElementById("rocketMass").value);
        var acceleration = engineThrust / rocketMass;
        var force = engineThrust;
        var thrustToWeight = engineThrust / (rocketMass * 9.8);
  
        document.getElementById("accelerationResult").innerHTML = "Acceleration: " + acceleration.toFixed(2) + " m/s^2";
        document.getElementById("forceResult").innerHTML = "Force: " + force.toFixed(2) + " N";
        document.getElementById("thrustToWeightResult").innerHTML = "Thrust-to-Weight Ratio: " + thrustToWeight.toFixed(2);
      }
  
  // Stability
  function calculateStability() {
        var rocketDiameter = parseFloat(document.getElementById("rocketDiameter").value);
        var centerOfGravity = parseFloat(document.getElementById("centerOfGravity").value);
        var centerOfPressure = parseFloat(document.getElementById("centerOfPressure").value);
  
        var stability = (centerOfGravity-centerOfPressure)/rocketDiameter;
        var stability_SUS = (stability > 1 && stability < 2) ? "Rocket is stable" : "Rocket is unstable";
        document.getElementById("stabilityResultSUS").innerHTML = stability_SUS;
        document.getElementById("stabilityResult").innerHTML = "Stability: " + stability.toFixed(2) + " units";
      }
  
  // Reset form
  function resetForm() {
    document.getElementById("rocketForm").reset();
    document.getElementById("specificImpulseForm").reset();
    document.getElementById("rocketDesignForm").reset();
    document.getElementById("stabilityForm").reset();
    document.getElementById("deltaVResult").innerHTML = "";
    document.getElementById("massRatioResult").innerHTML = "";
    document.getElementById("requiredFuelMassResult").innerHTML = "";
    document.getElementById("maxPayloadMassResult").innerHTML = "";
    document.getElementById("specificImpulseResult").innerHTML = "";
    document.getElementById("rocketMassResult").innerHTML = "";
    document.getElementById("stabilityResult").innerHTML = "";
  }
  
  // Show section
  function showSection(sectionId) {
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
  }