# **react-native-interactable** example

`react-native-interactable` is an excellent library for interactable views in React Native, that promises high performance.
Unfortunatly, the example (playground), included in the rero, is not working. So I separed the code and made it workable.

## How do I run it

Clone or download the project into your machine. Locate the repo using terminal/command window. Run following commands:

* `yarn install` or `npm install`<br/>
* `react-native link`<br/>
* `react-native run-ios` or `react-native run-android`<br/>


<br/><br/>
If you face the following issue, like

> error: Error: No resource found that matches the given name: attr 'android:keybo
ardNavigationCluster'.
>
>
>:react-native-interactable:processReleaseResources FAILED
>
>FAILURE: Build failed with an exception.
>
>* What went wrong:
>Execution failed for task ':react-native-interactable:processReleaseResources'.<br/>
>\> com.android.ide.common.process.ProcessException: Failed to execute aapt

while run on android check [issue 12](https://github.com/wix/react-native-interactable/issues/12) of `react-native-interactable` repo and [issue 499](https://github.com/react-community/create-react-native-app/issues/499) of `create-react-native-app` repo.
