![نص فقرتك (1)](https://github.com/user-attachments/assets/1fd35f64-7ff0-4eed-b8fe-516977d2430e)
## Weather Expert System
This project is a simple implementation of an expert system designed to predict the weather based on specific input conditions. The main goal was to apply one of the fundamental concepts of artificial intelligence (AI) — expert systems — in a small and enjoyable web-based project.

## What is an Expert System?
An expert system is a computer program that simulates the decision-making ability of a human expert. It uses a knowledge base of facts and rules to analyze information and provide conclusions. Expert systems are commonly used in fields such as medical diagnosis, weather forecasting, and fault detection.

## Solution Approach
The core logic of the expert system relies on a set of predefined rules and a certainty factor (CF) model. Each rule describes a set of conditions and an associated outcome with a specific confidence level. When the user inputs current weather conditions, the system matches them against the rules and calculates a confidence value for the predicted weather based on the CF model.

## Rules Used in the System
Each rule in the system is structured as follows:
1)  A set of conditions (e.g., Rainfall = high, Temperature: = cold)
2)  A predicted outcome (e.g., rain = likely)
3)  A confidence factor indicating how strongly the rule supports the outcome

When multiple rules match, their confidence factors are combined using the certainty factor formula to reach a final prediction. The rule with the highest overall confidence determines the predicted result.
