/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An interface to interact with browser window object.
 * Mainly used to mock out read only APIs in test.
 * See test-helper.js#mockWindowInterface
 */
export class WindowInterface {

  /**
   * @static
   * @param {!Window} win
   * @return {!Location}
   */
  static getLocation(win) {
    return win.location;
  }

  /**
   * @static
   * @param {!Window} win
   * @return {string}
   */
  static getDocumentReferrer(win) {
    return win.document.referrer;
  }

  /**
   * @static
   * @param {!Window} win
   * @return {string}
   */
  static getHostname(win) {
    return win.location.hostname;
  }

  /**
   * @static
   * @param {!Window} win
   * @return {string}
   */
  static getUserAgent(win) {
    return win.navigator.userAgent;
  }

  /**
   * @static
   * @param {!Window} win
   * @return {string}
   */
  static getUserLanguage(win) {
    return win.navigator.userLanguage || win.navigator.language;
  }
}
