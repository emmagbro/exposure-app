import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChallengeComplete3Page } from '../challenge-complete3/challenge-complete3';
import { ChallengeComplete4Page } from '../challenge-complete4/challenge-complete4';
import { ChallengeComplete5Page } from '../challenge-complete5/challenge-complete5';
import { SmileAtSomeDudePage } from '../smile-at-some-dude/smile-at-some-dude';
import { SmileAtSomeDude2Page } from '../smile-at-some-dude2/smile-at-some-dude2';
import { SmileAtSomeDude3Page } from '../smile-at-some-dude3/smile-at-some-dude3';
import { ChallengeCompletePage } from '../challenge-complete/challenge-complete';
import { ChallengeList4Page } from '../challenge-list4/challenge-list4';
import { NextChallengePage } from '../next-challenge/next-challenge';

@Component({
  selector: 'page-challenge-complete2',
  templateUrl: 'challenge-complete2.html'
})
export class ChallengeComplete2Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToChallengeComplete3(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete3Page);
  }goToChallengeComplete4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete4Page);
  }goToChallengeComplete5(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete5Page);
  }goToSmileAtSomeDude(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDudePage);
  }goToSmileAtSomeDude2(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDude2Page);
  }goToSmileAtSomeDude3(params){
    if (!params) params = {};
    this.navCtrl.push(SmileAtSomeDude3Page);
  }goToChallengeComplete(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeCompletePage);
  }goToChallengeComplete2(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeComplete2Page);
  }goToChallengeList4(params){
    if (!params) params = {};
    this.navCtrl.push(ChallengeList4Page);
  }goToNextChallenge(params){
    if (!params) params = {};
    this.navCtrl.push(NextChallengePage);
  }
}
